import { numConversion } from 'lib/numConversion'
import _ from 'lodash'

// 格式一csv匯出
export const exportCsvFileOne = (annualTranscript, data) => {
    const { terms, courses, scores, type } = annualTranscript
    const annualTranscriptSetting = _.get(data, 'annualTranscriptSetting') || {}
    const { termTranscriptSettings } = annualTranscriptSetting
    const termTranscripts = termTranscriptSettings.filter(x => _.keyBy(terms)[x.term])

    const rules = courses.map(course => scores.map(score => `${course}-${score}`)).flat()

    const titles = [
        '學期名稱',
        '班級名稱',
        '學生姓名',
        '班級學號',
        ...rules.flat(),
        '全班名次',
        '全級名次',
        '個人平均分',
        '全科總分'
    ]

    const csvData = termTranscripts.map(termTranscript => {
        const { classesByCurrentUser, term } = termTranscript
        const classes = classesByCurrentUser.edges.map(edge => edge.node)
        return classes.map(cls => {
            const { members } = cls
            const clsMembers = members.edges.map(edge => edge.node)
            return clsMembers.map(clsMember => {
                const { schooluser } = clsMember
                const { transcriptMarksheets } = schooluser || {}
                const transcriptMarksheet = transcriptMarksheets.filter(x => x.term === term)[0]
                const { grades, clsRank, groupRank, avgScore, totalScore } = transcriptMarksheet || {}
                let subCourses = ''
                const gradesData = courses.map(course => !!grades && grades[course]).filter(x => !!x)
                // 顯示不合格學生
                if (type === 'fail' && (!gradesData || !gradesData.length ||
                    (!!gradesData && !gradesData.filter(grade => (
                        (grade.usual < 60 && grade.usual > 59) || (grade.exam < 60 && grade.exam > 59) || (grade.score < 60 && grade.score > 59)
                    )).length)
                )) return null

                // 顯示優異生
                if (type === 'excellent' && (!gradesData || !gradesData.length ||
                    (!!gradesData && !gradesData.filter(grade => grade.usual > 80 && grade.exam > 80 && grade.score > 80).length)
                )) return null

                const clsMemberInfo = [`第${numConversion(term.toString())}學期`, cls.name, schooluser.name, clsMember.num]
                const schooluserCourseGrades = courses.map(course => {
                    const grade = !!grades && !!grades[course] ? grades[course] : null
                    subCourses = !!grades && !!grades[course] && !!grades[course].subCourses ? grades[course].subCourses : (subCourses || '')
                    const subGrade = !!subCourses && !!subCourses[course] ? subCourses[course] : null
                    return scores.map(score => {
                        if (score === '平時') {
                            if (grade && grade.usual) {
                                return grade.showRank ? grade.usualRank : parseFloat(grade.usual).toFixed(2)
                            } else if (subGrade && subGrade.usual) {
                                return subGrade.usualRank || parseFloat(subGrade.usual).toFixed(2)
                            }
                        } else if (score === '考試') {
                            if (grade && grade.exam) {
                                return grade.showRank ? grade.examRank : parseFloat(grade.exam).toFixed(2)
                            } else if (subGrade && subGrade.exam) {
                                return subGrade.examRank || parseFloat(subGrade.exam).toFixed(2)
                            }
                        } else if (score === '總分') {
                            if (grade && grade.score) {
                                return grade.showRank ? grade.rank : parseFloat(grade.score).toFixed(2)
                            } else if (subGrade && subGrade.exam) {
                                return subGrade.rank || parseFloat(subGrade.score).toFixed(2)
                            }
                        }
                    })
                })
                return ([
                    ...clsMemberInfo,
                    ...schooluserCourseGrades.flat(),
                    clsRank,
                    groupRank,
                    avgScore,
                    totalScore
                ])
            }).filter(x => !!x).join('\n')
        }).join('\n')
    })

    if (!!csvData && !!csvData.length) {
        const download = require('downloadjs')
        download(titles.join(',') + '\n' + csvData, '大分紙成績表資料.csv', 'text/csv')
    }
}