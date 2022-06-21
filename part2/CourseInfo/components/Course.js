import React from "react";

const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </>
);

const Course = ({ course }) => {
  const total = course.parts.reduce((a, b) => ({
    exercises: a.exercises + b.exercises,
  }));
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <div>total of {total.exercises} exercises</div>
    </div>
  );
};

export default Course;
