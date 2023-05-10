import styles from './Meals.module.css'

const MealsTitle = () =>{

    return(

        <div className={styles.title}>
            <h1> Delicious Food, Prepared And Delivered To You</h1>
            <p> select your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
            <p> all our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    )
}

export default MealsTitle;