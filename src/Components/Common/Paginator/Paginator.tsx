import React from 'react'
import s from '../../Content/Users/Users.module.css'

type PropsTypes = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
}

const Paginator: React.FC<PropsTypes>= (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages: Array<number> = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.setUsersButton}>
      {pages.map((p) => (
        <span
          key={p}
          className={props.currentPage === p ? s.selected : ''}
          onClick={() => {
            props.onPageChanged(p)
          }}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Paginator