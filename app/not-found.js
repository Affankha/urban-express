import Layout from "../components/layout/Layout"
import Link from "next/link"

export default function Error404() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="404 Error">
            
                {/*Error Page Start*/}
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner">
                                    <div className="error-page__img img-bounce">
                                        <img src="assets/images/resources/error-page-img-1.png" alt=""/>
                                    </div>
                                    <p className="error-page__text">The page you are looking for does not exist. It might have been
                                        moved or deleted.</p>
                                    <Link href="/" className="thm-btn error-page__btn">back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Error Page End*/}

            </Layout>

        </>
    )
}
