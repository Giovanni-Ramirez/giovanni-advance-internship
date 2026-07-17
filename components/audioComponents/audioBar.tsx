"use client"
import Image from "next/image";
import { GrBackTen, GrForwardTen, GrPlayFill, GrPauseFill  } from "react-icons/gr";
import styles from './audioBar.module.css'
import { useState, useRef, useEffect } from "react";

type AudioBarProps = {
    title: string
    author: string
    image: string
    audioLink: string
}

export default function AudioBar({ title, author, image, audioLink }: AudioBarProps) {
    // state
    const [isPlaying , setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    
    // ref
    const audioPlayer = useRef<HTMLAudioElement | null>(null);
    const progressBar = useRef<HTMLInputElement | null>(null);
    const animationRef = useRef<number | null>(null);
    
    const returnTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnedMinutes}:${returnedSeconds}`
    }

    useEffect(() => {
        if (!audioPlayer.current) return;
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        if (progressBar.current) {
            progressBar.current.max = String(seconds);
        }
    }, [audioLink]);


    const toggleIsPlaying = async () => {
        if (!audioPlayer.current) {
            return;
        }

        if (isPlaying) {
            audioPlayer.current.pause();
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
            setIsPlaying(false);
            return;
        }

        try {
            await audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
            setIsPlaying(true);
        } catch (error) {
            console.error('Audio play failed:', error);
        }
    }

    const whilePlaying = () => {
        if (!audioPlayer.current || !progressBar.current) return;

        progressBar.current.value = String(audioPlayer.current.currentTime);
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        if (!audioPlayer.current || !progressBar.current) return;

        audioPlayer.current.currentTime = progressBar.current.valueAsNumber;
        changePlayerCurrentTime();
    }
    
    const changePlayerCurrentTime = () => {
        if (!progressBar.current) return;
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.valueAsNumber / duration * 100}%`);
        setCurrentTime(progressBar.current.valueAsNumber);
    }

    const backTen = () => {
        if (!audioPlayer.current || !progressBar.current) return;

        const newTime = Math.max(0, audioPlayer.current.currentTime - 10);
        audioPlayer.current.currentTime = newTime;
        progressBar.current.value = String(newTime);
        changePlayerCurrentTime();
    }

    const forwardTen = () => {
        if (!audioPlayer.current || !progressBar.current) return;

        const newTime = Math.min(audioPlayer.current.currentTime + 10, audioPlayer.current.duration);
        audioPlayer.current.currentTime = newTime;
        progressBar.current.value = String(newTime);
        changePlayerCurrentTime();
    }
    
    return (
        <div className={styles.audio__wrapper}>
            <audio ref={audioPlayer} src={audioLink} />
            <div className={styles.audio__track_wrapper}>
                <figure className={styles.audio__track_image_mask}>
                    <figure className={styles.audio__track_image_wrapper}>
                        <Image className={styles.audio__track_image} src={image} height={48} width={48} alt="book image" />
                    </figure>
                </figure>

                <div className={styles.audio__track_details_wrapper}>
                    <div className={styles.audio__track_title}>{title}</div>
                    <div className={styles.audio__track_author}>{author}</div>
                </div>
            </div>

            <div className={styles.audio__control_wrapper}>
                <div className={styles.audio__controls}>
                <button className={styles.audio__controls_btn} onClick={backTen}>
                    <GrBackTen />
                </button>
                <button className={`${styles.audio__controls_btn} ${styles.audio__control_btn_play_n_pause}`} onClick={toggleIsPlaying}>
                    {isPlaying? <GrPauseFill className={styles.audio__control_icon_pause} /> : <GrPlayFill className={styles.audio__control_icon_play}/>}
                </button>
                <button className={styles.audio__controls_btn} onClick={forwardTen}>
                    <GrForwardTen />
                </button>
                </div>
            </div>

            <div className={styles.audio__progress_wrapper}>
                <div className={`${styles.audio__time} ${styles.audio__current_time}`}>{returnTime(currentTime)}</div>
                <input type="range"  className={styles.audio__progress_bar} defaultValue={0} ref={progressBar} onChange={changeRange}/>
                <div className={`${styles.audio__time} ${styles.audio__end_time}`}>{returnTime(duration)}</div>
            </div>
        </div>
    )
}