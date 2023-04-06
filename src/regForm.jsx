import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import './regForm.css';
import QueryService from './Services/queryservice';

const AddQuery = () => {
    const initialValues = {
        companyName: '',
        jobRole: '',
        jobLocation: '',
        jobDescription: '',
        contactNum: '',
        skillSet: '',
        requirements: '',
        experience: '',
        package: '',
        cabFacility: false

    }
    const validationSchema = () => {
        return (Yup.object().shape({
            companyName: Yup.string().required("Company Name must be mentioned"),
            jobRole: Yup.string().required("Job role is required"),
            jobLocation: Yup.string().required("Please mention job location"),
            jobDescription: Yup.string().required("Mention job description")
                .min(5, "Please mention job description with atleast 50 characters")
                .max(200, "Job description should not exceed 200 characters"),
            skillSet: Yup.string().required("Mention Skill Set reqired for job"),
            requirements: Yup.string().required("Mention minimum qualifications"),
            experience: Yup.string().required("Need to specify experience")
        }))
    }
    const handleSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
        alert("Received Your Information. Thank You");
        QueryService.createQuery(data);

    }
    return (
        <>
            <div className='container-f'>
                <div className="row">
                    <div className="col-md-5 offset-md-3">
                        <img src='logoo.jpg' alt='' style={{ width: "90%" }} />
                    </div>
                    <div className="col-md-5 offset-md-3">
                        <h1 style={{ fontSize: "4rem" }}>CareerIT</h1>
                        <p>Job Portal : Any openings in your company just register with job details</p>
                    </div>

                </div>
            </div>
            <div className="form-container">
                <div className="row">
                    <div className="col-md-6 offset-md-6">

                        <div className="register-form">
                            <h6>* Indicates mandatory fields</h6>
                            <Formik initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}>
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor='companyName'>Company Name<b>*</b></label>
                                            <Field name='companyName' type='text'
                                                className={'form-control' + (errors.companyName && touched.companyName ? ' is-invalid' : '')} />
                                            <ErrorMessage name='companyName' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='jobRole'>Job Role<b>*</b></label>
                                            <Field name='jobRole' type='text'
                                                className={'form-control' + (errors.jobRole && touched.jobRole ? ' is-invalid' : '')} />
                                            <ErrorMessage name='jobRole' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='jobLocation'> Locations available<b>*</b></label>
                               
                                            <Field name='jobLocation' type='text'
                                                className={'form-control' + (errors.jobLocation && touched.jobLocation ? ' is-invalid' : '')} />
                                            <ErrorMessage name='jobLocation' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='jobDescription'>Job Description<b>*</b></label>
                                            <Field name='jobDescription' as='textarea' cols={6} rows={6}
                                                className={'form-control' + (errors.jobDescription && touched.jobDescription ? ' is-invalid' : '')} />
                                            <ErrorMessage name='jobDescription' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='contactNum'>Contact</label>
                                            <Field name='contactNum' type='number' className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='skillSet'>Required Skills<b>*</b></label>
                                            <Field name='skillSet' type='text'
                                                className={'form-control' + (errors.skillSet && touched.skillSet ? ' is-invalid' : '')} />
                                            <ErrorMessage name='skillSet' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='requirements'>Required Qualifiations<b>*</b> </label>
                                            <Field name='requirements' type='text' as="select"
                                                className={'form-control' + (errors.requirements && touched.requirements ? ' is-invalid' : '')} >
                                                <option value="red">Select one..</option>
                                                <option value="green">B.Tech/BE</option>
                                                <option value="blue">BSC/B.Com</option>
                                                <option value="blue">BCA</option>
                                                <option value="blue">PG/MBA</option>
                                                </Field>
                                            <ErrorMessage name='requirements' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='experience'>Experience Required<b>*</b></label>
                                            <Field name='experience' type='number'
                                                className={'form-control' + (errors.experience && touched.experience ? ' is-invalid' : '')} />
                                            <ErrorMessage name='experience' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='package'>Package Offered<b>*</b></label>
                                            <Field name='package' type='number'
                                                className={'form-control' + (errors.package && touched.package ? ' is-invalid' : '')} />
                                            <ErrorMessage name='package' component={'div'} className='invalid-feedback' />
                                        </div>
                                        <div className="form-group form-check">
                                            <label htmlFor='cabFacility'>Cab Available</label>
                                            <Field name='cabFacility' type='checkbox' />
                                        </div>
                                        <div className="form-group">
                                            <button type='submit' id='button' className='btn btn-primary'>Proceed</button>
                                        </div>
                                    </Form>
                                )}

                            </Formik>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddQuery;