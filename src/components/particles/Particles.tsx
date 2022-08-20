import styles from "./Particles.module.scss"

function createArray(count: number): number[] {
    const arr: number[] = [];

    for (let i = 0; i < count; i++) {
        arr.push(i);
    }

    return arr;
}

const Particles = () => {
    return (
        <div>
            {createArray(30).map((num) => (
                <div key={num} className={styles.particle}></div>
            ))}
        </div>
    );
}

export default Particles;