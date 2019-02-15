import React, {Component, ReactFragment as Fragment} from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        this.intervalId = setTimeout(() => {
            let content = document.body.querySelector('.main_page_content_container');
            content.classList.add('fade-appear-active')

        }, 20);
    }

    render() {

        return (
            <div className="main_page_container">
                <div className="main_page_content_container fade-enter">
                    <header>
                        <h1>Create your resume</h1>
                        <p>
                            Use our templates and create a beautiful resume in minutes. Make recruiter spot your Curriculum
                            Vitae among the others.
                        </p>
                    </header>
                    <section className="btns_container">
                        <Link to="/templates"><button className="selection_btn choose_template"> Choose a template</button></Link>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;