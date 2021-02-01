const awsUrls = [
  'https://macau-school.s3.ap-northeast-1.amazonaws.com/',
  'https://macau-school.s3-ap-northeast-1.amazonaws.com/',
  'https://macau-school.s3.amazonaws.com/'
]
const imgixUrl = 'https://macauschool.imgix.net'

export const getImgixUrl = (keyOrUrl = '', options = '') => {
  let key
  let url
  keyOrUrl = keyOrUrl || ''
  if (keyOrUrl.indexOf('http') === 0) {
    url = keyOrUrl
  } else {
    key = keyOrUrl
  }

  if (key) {
    return getImgixUrlByKey(key, options)
  }

  if (url) {
    if (url.includes(awsUrls[0])) {
      key = url.replace(awsUrls[0], '')
      return getImgixUrlByKey(key, options, false)
    }
    if (url.includes(awsUrls[1])) {
      key = url.replace(awsUrls[1], '')
      return getImgixUrlByKey(key, options, false)
    }
    if (url.includes(awsUrls[2])) {
      key = url.replace(awsUrls[2], '')
      return getImgixUrlByKey(key, options, false)
    }
    return url
  }

  return ''
}

export const getImgixUrlByKey = (key, options = '', needEncode = true) => {
  const parts = key.split('/')
  let first = ''
  let last = ''
  if (parts.length === 1) {
    last = parts[0]
  } else {
    first = parts.slice(0, -1).join('/')
    last = parts[parts.length - 1]
  }
  if (needEncode) {
    last = encodeURIComponent(last).replace(/%20/g, '+')
  }

  return imgixUrl + '/' + (first ? first + '/' : '') + last + options
}
