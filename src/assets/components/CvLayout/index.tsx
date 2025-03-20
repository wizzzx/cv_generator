import styles from "./index.module.scss";
import React from "react";
import cn from "classnames";
import { Container } from "../Container";

interface Props {
  className?: string;
}

export const CvLayout: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(styles.container, className)}>
      <section className={styles.main_section}>
        {/*image uploading*/}
        <div className={styles.name_wrapper}>
          <h2>Hani Husamuddin</h2>
          <p>Frontend Developer</p>
        </div>

        <div className={styles.info_wrapper}>
          <p className={styles.info_item}>Surakarta, December 2, 1994</p>
          <p className={styles.info_item}>+62 822 2045 4652</p>
          <p className={styles.info_item}>hani.husam@gmail.com</p>
          <p className={styles.info_item}>Yogyakarta, Indonesia</p>
        </div>

        <div className={styles.skills_wrapper}>
          <h3>Skills</h3>
          <ul className={styles.skill_list}>
            <li className={styles.skill_list_item}>HTML and CSS</li>
            <li className={styles.skill_list_item}>
              Scripting language: Javascript, Typescript, Python, Java
            </li>
            <li className={styles.skill_list_item}>
              Framework/Library: Django, React, Next, Bootstrap, TailwindCSS,
              etc
            </li>
            <li className={styles.skill_list_item}>
              Understanding UI Design; Visual Hierarchy, Design System, etc
            </li>
          </ul>
        </div>

        <div className={styles.award_wrapper}>
          <h3 className={styles.awards_header}>Honors & Awards</h3>
          <ul className={styles.awards_list}>
            <li className={styles.awards_list_item}>
              <div className={styles.award_name}>
                <p>Best Graduated</p>
                <time>2019</time>
              </div>
              <p className={styles.award_commentary}>
                Included in one of the award recipients of the best graduate
                students in the IV graduation period of UPN "Veteran" Yogyakarta
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.hobbies_wrapper}>
          <h3>Hobbies & Interest</h3>
          <ul className={styles.hobbies_list}>
            <li>Apple devices</li>
            <li>Movies</li>
            <li>Books</li>
          </ul>
        </div>

        <div className={styles.credentials_wrapper}>
          <h3>Links and Credentials</h3>
          <ul className={styles.credentials_list}>
            <li className={styles.credentials_list_item}>
              <img
                src="/public/images/linkedin.svg"
                alt="linkedin"
                width={14}
                height={14}
              />
              <p>Linkedin</p>
            </li>
            <li className={styles.credentials_list_item}>
              <img
                src="/public/images/github.svg"
                alt="github"
                width={14}
                height={14}
              />
              <p>Github</p>
            </li>
            <li className={styles.credentials_list_item}>
              <img
                src="/public/images/dribbble.svg"
                alt="dribbble"
                width={14}
                height={14}
              />
              <p>Dribbble</p>
            </li>
            <li className={styles.credentials_list_item}>
              <img
                src="/public/images/instagram.svg"
                alt="instagram"
                width={14}
                height={14}
              />
              <p>Instagram</p>
            </li>
            <li className={styles.credentials_list_item}>
              <img
                src="/public/images/external_link.svg"
                alt="external"
                width={14}
                height={14}
              />
              <p>Website</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.secondary_section}>
        <div className={styles.about_wrapper}>
          <h3>About</h3>
          <div className={styles.line}></div>
          <p>
            I have a background in information technology, with a focus on
            frontend development and UI design. I am the type of person who
            seizes every opportunity to learn something new. That is why I enjoy
            challenges. From there, I'm under pressure to learn quickly and gain
            a lot of new experience.
          </p>
        </div>

        <div className={styles.education_wrapper}>
          <h3>Education</h3>
          <ul className={styles.education_list}>
            <li className={styles.education_list_item}>
              <time className={styles.date}>2015 - 2019</time>
              <div className={styles.education_item_sub}>
                <div className={styles.gray_dot}></div>
                <div className={styles.education_item_text_wrapper}>
                  <h4>
                    Informatics, Universitas Pembanguan Nasional "Veteran"
                    Yogyakarta
                  </h4>
                  <p className={styles.studies}>
                    Bachelor of Computer Science, Artificial Intelligence
                  </p>
                  <p className={styles.education_commentary}>
                    I graduated in July 2019 with a GPA of 3.63. One of the
                    award recipients for the best graduate of the university at
                    the time. In my thesis, I looked into how Natural Language
                    Processing (NLP) was used in Telegram Bot. For the NLP
                    approach method, I used Neural Network (Deep Learning) and
                    Text Mining.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.experience_wrapper}>
          <h3>Experience</h3>
          <ul className={styles.experience_list}>
            <li className={styles.experience_list_item}>
              <h4 className={styles.experience_company}>Upwork</h4>
              <p className={styles.experience_position}>
                Frontend Developer | Nov 2019 - present
              </p>
              <p className={styles.experience_commentary}>
                Upwork is an American freelancing platform where enterprises and
                individuals connect in order to conduct business. I am currently
                accepting remote or freelance Web Development and UI design work
                from this platform.
              </p>
            </li>
            <li className={styles.experience_list_item}>
              <h4 className={styles.experience_company}>Currinda Pty. Ltd.</h4>
              <p className={styles.experience_position}>
                UI Engineer | Oct 2020 - Aug 2021
              </p>
              <p className={styles.experience_commentary}>
                I am a member of the Engineer Team, along with three other
                people. I am in charge of creating an interface that is both
                user-friendly and consistent with the company's brand. I also
                assists the team with frontend development, particularly in the
                creation of design systems and UI components with React.
              </p>
            </li>
            <li className={styles.experience_list_item}>
              <h4 className={styles.experience_company}>Bubays Pte. Ltd.</h4>
              <p className={styles.experience_position}>
                Web Developer | May 2019 - Nov 2019
              </p>
              <p className={styles.experience_commentary}>
                I am in charge of the company website's full-stack development
                and maintenance. The job entails creating and maintaining a
                website from the ground up. In addition, I am the only Web
                Developer in this company.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.volunteer_wrapper}>
          <h3>Volunteer Experience</h3>
          <ul className={styles.volunteer_list}>
            <li className={styles.volunteer_list_item}>
              <h4 className={styles.volunteer_company}>KawalCOVID19</h4>
              <p className={styles.volunteer_position}>
                Frontend Developer | Oct 2020 - present
              </p>
              <p className={styles.volunteer_commentary}>
                Assistig in the resolution of several user-related issues. API
                intergration and system design jobs are among them. For the time
                being, I'm also working with the team on the wargabantuwarga.com
                and silacak.com
              </p>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
};
