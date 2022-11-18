import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ArrowForward } from '@material-ui/icons'


function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
    const [isClicked, setClicked] = React.useState(true)
    const [isClickedInside, setClickedInside] = React.useState(true)

    const ListItemInside = ({ labeel, itemss }) => {
        return (

            <ListItem style={{ width: "100%", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }} button dense >
                <ListItemText style={{ display: "flex",marginTop:"-15%", alignItems: "center", width: "8vw", borderWidth: "0px", borderStyle: "solid", paddingLeft: depth * depthStep }} onClick={() => { setClickedInside(!isClickedInside) }}>
                    <div className='labellDiv'>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ marginTop: "11px" }}><ArrowForward className="Arrow" /></div>
                            <p className="labellStyle">{labeel}</p>
                        </div>
                    </div>
                </ListItemText>
            </ListItem>
        )
    }
    return (
        <>
            <ListItem button dense style={{marginLeft:"-7.7%"}}>
                <ListItemText style={{ paddingLeft: depth * depthStep,marginTop:"-10%", }}  >
                    <span style={{fontSize:"24px"}} onClick={() => { setClicked(!isClicked) }}><pre className='titleLabel'>{label}</pre></span>
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