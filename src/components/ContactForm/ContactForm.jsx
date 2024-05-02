import css from "./ContactForm.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup"

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
})

export default function ContactForm({ onAdd }) {
    const handleSubmit = (values, action) => {
        const newContact = {
         id: nanoid(),
        name: values.name,
        number: values.number
     }   
        onAdd(newContact);
        action.resetForm();
    }
    const nameFieldId = useId();
    const numberFieldId = useId();
    
    return (
        <Formik initialValues={{ name:"", number:""}} onSubmit={ handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.formContainer}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type='text' name='name' id={nameFieldId} />
                <ErrorMessage name="name" component="span" />
                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" id={numberFieldId} />
                <ErrorMessage name="number" component="span" />
            <button className={css.btn} type='submit'>Add contact</button>
            </Form>
        </Formik> 
    )}