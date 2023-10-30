import React from "react";
import { useState, useEffect } from "react";
import styles from "../style/style.module.scss";
import facebookIcon from "../assets/icon-facebook.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

const Countdown = () => {
  const targetDate = new Date("2023-11-09T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div id={styles.countdown}>
        <h3>WE'RE LAUNCHING SOON</h3>
        <div className={styles.content}>
          {Object.entries(timeLeft).map((el) => {
            const label = el[0];
            const value = el[1];

            return (
              <div className={styles.box}>
                <div className={styles.value}>
                  <span>{value}</span>
                </div>
                <span className={styles.label}>{label}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.footer}>
          <a href="https://www.facebook.com">
            <img
              src={facebookIcon}
              alt="Facebook"
              className={styles.socialIcon}
            />
          </a>
          <a href="https://www.pinterest.com">
            <img
              src={pinterestIcon}
              alt="pinterest"
              className={styles.socialIcon}
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              src={instagramIcon}
              alt="Instagram"
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Countdown;
