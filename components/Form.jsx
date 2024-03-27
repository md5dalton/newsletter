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
        <Form className="grid gap-6">
            <fieldset className="grid gap-2">
                <label className="flex justify-between text-xs font-bold">
                    <p>Email address</p>
                    <p className="text-tomato">Valid email required</p>
                    {/* <ErrorMessage
                        name="email"
                        component="p"
                    /> */}
                </label>
                <Field
                    className="
                        px-6 py-4
                        rounded-lg outline-none
                        border-2 border-grey
                    "
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                />
            </fieldset>
            <button
                type="submit"
                className="bg-dark-slate-grey text-white grid h-14 place-items-center rounded-lg font-bold"
            >Subscribe to monthly newsletter</button>
        </Form>
    </Formik>
)