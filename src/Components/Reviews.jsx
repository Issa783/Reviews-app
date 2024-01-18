import React, { useState } from "react"
import people from "../data"
import styles from "../styles.module.css"
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
const Reviews = () => {
    const[index,setIndex] = useState(0)
    const{name,job,image,text} = people[index]
    const checkNumber = (number) => {
        if(number > people.length-1){
            return 0
        }
        if(number < 0){
            return people.length - 1
        }
        return  number
    }
    const Next = () => {
        setIndex((index) => {
            let newIndex = index + 1;
             return checkNumber ( newIndex)
        })
    }
    const Prev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
             return checkNumber ( newIndex)
        })
    }
 
    const handleClick = () => {
        let RandomNumber = Math.floor(Math.random() * people.length)
        if(RandomNumber === index){
            RandomNumber = index + 1
        }
        setIndex(checkNumber(RandomNumber))
    }
   
    return(
                <article className={styles.review}>
                    <div className={styles.imgcontainer}>
                        <img src={image} className={styles.personimg} />
                        <span className={styles.quoteicon}>
                            <FaQuoteRight />
                        </span>   
                    </div>
                    <h4 className={styles.author}>{name}</h4>
                    <p className={styles.job}>{job}</p>
                    <p className={styles.info}>{text}</p>
                    <div className={styles.buttoncontainer}>
                        <button onClick={Prev} className={styles.prevBtn}>
                            <FaChevronLeft />
                        </button>
                        <button onClick={Next} className={styles.nextBtn}>
                            <FaChevronRight />
                        </button>
                    </div> 
                    <button  className={styles.randombtn}onClick={handleClick}>Suprise me</button>  
               
            
        </article>
    )
    }
export default Reviews