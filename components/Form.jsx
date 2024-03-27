"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default () => (
    <Formik
        initialValues={{
            email: ""
        }}
        
        validationSchema={Yup.object({
            email: Yup.string()
                .email("Valid email required")
                .required("Valid email required")
        })}

        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log(values)
                setSubmitting(false)
            }, 400)
        }}
    >
        <Form>
            <fieldset>
                <label>
                    <p>Email</p>
                    <p>Valid email required</p>
                    {/* <ErrorMessage
                        name="email"
                        component="p"
                    /> */}
                </label>
                <Field
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                />
            </fieldset>
            <button type="submit">Subscribe to monthly newsletter</button>
        </Form>
    </Formik>
)