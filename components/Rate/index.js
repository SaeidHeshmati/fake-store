import styles from "/styles/components/rate.module.css"

const Rate = ({ rating, color, width }) => {
    const percentage = rating * 20;
    return (
        <div className={styles.container} style={{width: `${width}px`, height: `${width/5}px`}}>
            <div className={styles.percentage} style={{width: `${percentage}%`, backgroundColor: color}}></div>
            <img className={styles.img} src="/stars.png"></img>
        </div>
    )
}

Rate.defaultProps = {
    rating: 0,
    color: "#f6666a",
    width: 100
}

export default Rate;