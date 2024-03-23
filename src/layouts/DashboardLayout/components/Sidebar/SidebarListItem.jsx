import React from 'react'
import { Link, useMatch } from 'react-router-dom'

// Custom Modules
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const SidebarListItem = ({ node }) => {
  const [childVisible, setChildVisiblity] = React.useState(false)
  const hasChild = node?.children?.length ? true : false
  const subRef = React.useRef()

  const handleIsVisible = () => {
    setChildVisiblity((v) => !v)
  }

  return (
    <li>
      {!hasChild ? (
        <Link
          to={!hasChild ? `${node?.link}` : '/'}
          className={`flex items-center justify-between py-3 text-base tracking-wide text-slate-500 outline-none
           transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 
           dark:hover:text-navy-50 `}
        >
          <span className='space-x-2 flex items-center'>
            <Icon icon={node.icon} />
            <span>{node?.label}</span>
          </span>
        </Link>
      ) : (
        <span
          onClick={handleIsVisible}
          className={`cursor-pointer flex items-center justify-between py-3 text-base 
          tracking-wide text-slate-500 outline-none transition-[color,padding-left]
           duration-300 ease-in-out hover:text-primary-800 dark:text-navy-200 dark:hover:text-navy-50 
           ${
             childVisible
               ? 'text-slate-800 font-semibold dark:text-navy-50'
               : ''
           }`}
        >
          <span className='space-x-2 flex items-center'>
            <Icon icon={node.icon} />
            <span>{node?.label}</span>
          </span>

          {hasChild && (
            <Icon
              icon={childVisible ? Iconify.arrowDown : Iconify.arrowRight}
            />
          )}
        </span>
      )}

      {hasChild && (
        <ul
          ref={subRef}
          className={` overflow-hidden transition-all duration-500
       `}
          style={{
            height: childVisible ? `${subRef.current?.scrollHeight}px` : '0px',
          }}
        >
          {node?.children?.map((nastedNode) => (
            <li key={nastedNode.key} className='duration-300'>
              <Link
                to={nastedNode?.link}
                className={`flex items-center justify-between p-2 text-base tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4 ${
                  useMatch(nastedNode?.link)
                    ? 'font-medium text-primary dark:text-accent-light'
                    : 'text-slate-500 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50'
                }`}
              >
                <div className='flex items-center space-x-2'>
                  <div className='h-1.5 w-1.5 rounded-full border border-current opacity-40'></div>
                  <span>{nastedNode?.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default SidebarListItem
