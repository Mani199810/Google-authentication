import { useState } from "react";
import styles from "./styles.module.css";
import profile from "../image/profile.jpg"

export default function Home(userDetails) {
	const user=userDetails.user
	var data=user.name 

	const logout = () => {
		window.open(`http://localhost:8080/auth/logout`, "_self");
	};

		const login = () => {
			window.open(
				`http://localhost:8080/auth/google/callback`,
				"_self"
			);
		};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Welcome dashboard</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src={profile} alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Profile</h2>
					
					<img src={user.picture} alt="" className={styles.picture} />
					<input
						type="text"
						defaultValue={user.name}
						className={styles.input}
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className={styles.input}
						placeholder="Email"
					/>
					

					{
					data ? (<button className={styles.btn} onClick={logout}>
						Log Out
					</button>) : (<button className={styles.btn} onClick={login}>
						Log in
					</button>) 
					 }
				</div>
			</div>
		</div>
	);
}


