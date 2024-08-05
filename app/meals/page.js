import Link from "next/link";
import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
          <p>
            Coose your favorrite recipe and cook it yourself. It is easy and fun
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </p>
        </h1>
      </header>

      <main className={classes.main}></main>
    </>
  );
}
