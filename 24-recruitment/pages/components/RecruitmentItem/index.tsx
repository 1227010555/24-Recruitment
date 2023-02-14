import { useState } from 'react'
import styles from './styles.module.css'

type Props = {
    data: Recruitment
}

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

export default function RecruitmentItem(prop: Props) {
    const { data } = prop
    const [show, isShow] = useState(false)

    return (
        <>
            <div className={styles.header}>

                <span className={styles.title}>
                    {data.title}
                </span>

                <div className={styles.info}>
                    <span className={styles.business}>
                        {data.business}
                    </span>

                    <span className={styles.type}>
                        {data.type}
                    </span>

                    <div className={styles.time}>
                        {data.startTime}-{data.endTime}
                    </div>

                </div>


            </div>

            <div className={styles.content}>
                <span className={!show ? styles.detail : ""}>
                    {data.detail}
                </span>
                <span className={styles.show} onClick={e => isShow(!show)} >
                    {!show ? "展开" : "收起"}
                </span>
            </div>

            <div className={styles.footer}>

                <span>
                    <span className={styles.pageViews}>
                        浏览量：{data.pageViews}
                    </span>

                    <span className={styles.likeNumber}>
                        点赞：{data.likeNumber}
                    </span>
                </span>

                <a href={data.tdCode} className={styles.url}>链接</a>
            </div>
        </>
    )
}
