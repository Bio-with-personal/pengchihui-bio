import { Box } from '@chakra-ui/core'
export const Es6Function = () => {
    //交集
    let originData = ['1', '2', '3', '4', '5']
    let pendingData = [{ id: '1', name: 'first' }, { id: '2', name: 'two' }, { id: '3', name: 'third' }]
    let setData = new Set(originData)
    let intersection = pendingData.filter((item) => { return setData.has(item.id) })

    //差集
    let setTwoData = new Set(originData)
    let subtraction = pendingData.filter((item) => { return !setTwoData.has(item.id) })
    console.log(intersection, subtraction)

    //并集
    // let union = new Set([...originData, ...pendingData])

    const oldId = pendingData.map((item) => { return item.id })
    for (var i = 0; i < originData.length; i++) {
        if (!oldId.includes(originData[i])) {
            let newObj = { id: originData[i], name: '1235' }
            pendingData.push(newObj)
        }
    }
    return (
        <Box>123456</Box>
    )
}

export default Es6Function