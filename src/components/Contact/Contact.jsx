import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import css from "./Contact.module.css";

export default function Contact( {data:{id, name, number}, onDelete}) {
    return (
        <div className={css.container}>
            <div className={css.textContainer}>
                <p><FaPhoneSquareAlt />{name}</p>
                <p><ImAddressBook />{number}</p>
            </div>
            <button className={css.btn} onClick={()=> onDelete(id)}>Delete</button>
    </div>
)}