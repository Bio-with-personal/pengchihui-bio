const seoConfig = () => {
  return {
    title: 'Macau School | 學不停',
    description: '在生活中不停學習。線上學習平台，學校管理系統，為澳門學生而設。',
    openGraph: {
      url: 'https://macau.school',
      title: 'Macau School',
      description: '在生活中不停學習。線上學習平台，學校管理系統，為澳門學生而設。',
      images: [
        {
          url: 'https://macau.school/school/static/default.jpg',
          width: 500,
          height: 300,
          alt: 'Macau School - 為澳門學生而設'
        }
      ],
      site_name: 'Macau School'
    }
  }
}

export default seoConfig
