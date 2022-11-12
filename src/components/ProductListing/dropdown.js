import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
    const [isClicked, setClicked] = React.useState(true)
    const [isClickedInside, setClickedInside] = React.useState(true)

    const ListItemInside = ({ labeel, itemss }) => {
        return (

            <ListItem style={{ width: "100%" }} button dense >
                <ListItemText style={{ width: "8vw", borderWidth: "0px", borderStyle: "solid", paddingLeft: depth * depthStep }} onClick={() => { setClickedInside(!isClickedInside) }}>
                    <span >{labeel}</span>
                    <ListItem button dense >
                        {console.log("The itemss:"+JSON.stringify(itemss))}
                        {isClickedInside ? null : <span>{itemss.map((item) => <span><p>{item.name}</p></span>)}</span>}
                    </ListItem>
                </ListItemText>
            </ListItem>
        )
    }
    return (
        <>
            <ListItem button dense>
                <ListItemText style={{ paddingLeft: depth * depthStep }} >
                    <span onClick={() => { setClicked(!isClicked) }}>{label}</span>
                    {isClicked ? null : <ListItem button dense >
                        <span>{items.map((item) => <p><ListItemInside labeel={item.label} itemss={item.inside} /></p>)}</span>
                    </ListItem>}
                </ListItemText>
            </ListItem>
            {/* {Array.isArray(items) ? (
                <List>
                    {items.map((subItem) => (
                        <SidebarItem
                            key={subItem.name}
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                        />
                    ))}
                </List>
            ) : null} */}
        </>
    )
}

function Sidebar({ items, depthStep, depth }) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                {
                    items.map((subItem) => (
                        <SidebarItem
                            key={subItem.name}
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                        />
                    ))
                }
            </List>
        </div>
    )
}

export default Sidebar