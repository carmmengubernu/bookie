import React from 'react';
import FilterChip from '../Filter/FilterChip/FilterChip';
import { Link, useLocation } from 'react-router-dom';

function RecipeOverview(props) {
  const { pathname, search } = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    window.print();
  };
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      {props.imgSrc && (
        <img
          src={`/${props.imgSrc}`}
          alt={props.altText}
          className='max-w-[536px] w-full rounded-xl'
        />
      )}
      <div className='flex flex-col gap-6 srink-0 flex-1 w-full'>
        {props.recipeCategories && (
          <div className='flex gap-2 items-center'>
            {props.recipeCategories.map((category) => (
              <FilterChip
                key={category}
                label={category}
              />
            ))}
          </div>
        )}

        {props.recipeTitle && <h1>{props.recipeTitle}</h1>}
        {props.recipeText && (
          <p className='text-muted-text'>{props.recipeText}</p>
        )}
        {props.recipeAuthor && (
          <p className='label text-muted-text'>By {props.recipeAuthor}</p>
        )}

        <div>
          <div className='flex gap-2  '>
            <p className='pre-title text-muted-text'>prep time</p>
            <p className='pre-title text-muted-text'>cook time</p>
          </div>
          <div className='flex gap-6'>
            {props.recipePrepTime && (
              <p className='label'>{props.recipePrepTime}</p>
            )}
            {props.recipeCookingTime && (
              <p className='label'>{props.recipeCookingTime}</p>
            )}
          </div>
        </div>
        <Link
          to={`${pathname}${search}`}
          onClick={handleClick}
          className='print:hidden button button--secondary w-fit min-w-fit!'>
          Print ↗
        </Link>
      </div>
    </div>
  );
}

export default RecipeOverview;
