import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 120,
      backgroundColor: theme.palette.background.paper,
    },
  })
)

type Props = {
  selectedIndex: number
  setSelectedIndex: (i: number) => void
  elements: string[]
}

export const Menu = ({ selectedIndex, setSelectedIndex, elements }: Props) => {
  const classes = useStyles()

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ): void => {
    setSelectedIndex(index)
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Main mailbox folders">
        {elements.map((el, i) => (
          <ListItem
            key={el}
            button
            selected={selectedIndex === i}
            onClick={event => handleListItemClick(event, i)}
          >
            <ListItemText primary={el} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
