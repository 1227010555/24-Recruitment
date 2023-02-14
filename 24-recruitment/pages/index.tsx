// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import RecruitmentItem from './components/RecruitmentItem'

// const inter = Inter({ subsets: ['latin'] })

type Recruitment = {
  id: string //服务器返回
  business: string //公司
  type: string // 0——日常
  // 1——暑期
  // 2——秋招
  // 3——春招
  startTime: string  //招聘开始时间
  endTime: string  //招聘结束时间
  title: string  //招聘标题
  detail: string //招聘详情
  tdCode: string //二维码 --url链接 根据url链接去请求阿里云服务器
  pageViews: number  //浏览量
  likeNumber: number //点赞量
}

const data: Recruitment = {
  id: "1",
  business: "百度",
  type: "日常",
  startTime: "2023/2/13",
  endTime: "2023/2/14",
  title: "前端开发师",
  detail: "1. 计算机相关专业，本科以上2. 熟悉HTML5、CSS开发技术，了解JavaScript面向对象编程3. 精通JavaScript，jQuery，Node.js,并且有相关项目经验4. 熟练运用前端流行框架（vue，React，angularJs），并且有项目经验5. 熟悉各种常见的跨浏览器、跨设备问题，对可用性、可访问性等相关知识有实际的了解和实践经验6. 具备有良好的服务意识、责任心、较强的学习能力，优秀的团队沟通与协作能力",
  tdCode: "http://www.baidu.com",
  pageViews: 666,
  likeNumber: 666
}

const test = [data, data, data]

export default function Home() {
  return (
    <>
      <ul className={styles.recruitment}>
        {
          test.map((item) => {
            return (
              <li key={item.id}>
                <RecruitmentItem data={item}></RecruitmentItem>
              </li>
            )
          })
        }
      </ul>

    </>
    // <>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <main className={styles.main}>
    //     <div className={styles.description}>
    //       <p>
    //         Get started by editing&nbsp;
    //         <code className={styles.code}>pages/index.tsx</code>
    //       </p>
    //       <div>
    //         <a
    //           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           By{' '}
    //           <Image
    //             src="/vercel.svg"
    //             alt="Vercel Logo"
    //             className={styles.vercelLogo}
    //             width={100}
    //             height={24}
    //             priority
    //           />
    //         </a>
    //       </div>
    //     </div>

    //     <div className={styles.center}>
    //       <Image
    //         className={styles.logo}
    //         src="/next.svg"
    //         alt="Next.js Logo"
    //         width={180}
    //         height={37}
    //         priority
    //       />
    //       <div className={styles.thirteen}>
    //         <Image
    //           src="/thirteen.svg"
    //           alt="13"
    //           width={40}
    //           height={31}
    //           priority
    //         />
    //       </div>
    //     </div>

    //     <div className={styles.grid}>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Docs <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Find in-depth information about Next.js features and&nbsp;API.
    //         </p>
    //       </a>

    //       <a
    //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Learn <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Learn about Next.js in an interactive course with&nbsp;quizzes!
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Templates <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Discover and deploy boilerplate example Next.js&nbsp;projects.
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h2 className={inter.className}>
    //           Deploy <span>-&gt;</span>
    //         </h2>
    //         <p className={inter.className}>
    //           Instantly deploy your Next.js site to a shareable URL
    //           with&nbsp;Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>
    // </>
  )
}
