import styles from "/styles/components/rate.module.css"

const Rate = ({ rating, color }) => {
    const percentage = rating * 20;
    return (
        <div className={styles.container}>
            <div className={styles.percentage} style={{width: `${percentage}%`, backgroundColor: color}}></div>
            <img className={styles.img} src="/stars.png"></img>
        </div>
    )
}

Rate.defaultProps = {
    rating: 0,
    color: "#f6666a"
}

export default Rate;