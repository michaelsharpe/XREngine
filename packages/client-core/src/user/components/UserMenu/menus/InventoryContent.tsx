import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { ArrowBackIos, FilterList } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {
  Grid,
  Divider,
  Box,
  Card,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  LinearProgress,
  Menu,
  MenuItem,
  Select,
  Stack
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import { usePrevious } from '../../../../hooks/usePrevious'

const useStyles = makeStyles({
  root1: {
    width: '50%'
  },
  root: {
    width: '50%',
    // height: '100vh',
    boxShadow: '16px 16px 16px 16px #11111159',
    margin: 'auto',
    borderadius: '10px'
  },
  item: {
    border: 'solid 1px',
    borderRadius: '5px',
    borderColor: '#d9d7d78c',
    cursor: 'pointer'
  },
  modalBody: {
    backgroundColor: '#FFF'
  },
  modalBoxShadow: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    backgroundColor: 'white'
  },
  itemscroll: {
    // maxHeight: '500px',
    overflow: 'scroll'
  },
  title: {
    color: '#777777'
  },
  p10: {
    padding: '10px'
  },
  selecteditem: {
    border: '2px solid #800000'
  },
  card: {
    boxShadow: '16px 16px 16px 16px #11111159'
  },
  contents: {
    justifyContent: 'center'
  }
})

const ITEM_HEIGHT = 48

const InventoryContent = ({ coinData,data, user, handleTransfer, isLoadingtransfer, type }: any) => {
  const history = useHistory()
  const classes = useStyles()
  const [state, setState] = useState({
    url: '',
    metadata: '',
    selectedid: '',
    userid: '',
    anchorEl: null,
    selectedtype: '',
    inventory: []
  })
  const { url, metadata, userid, selectedid, anchorEl, selectedtype, inventory } = state
  const prevState = usePrevious({ selectedtype })
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setState((prevState: any) => ({
      ...prevState,
      anchorEl: event.currentTarget
    }))
  }
  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      anchorEl: null
    }))
  }
  const handletypeselect = (id) => {
    setState((prevState) => ({
      ...prevState,
      selectedtype: id
    }))
    handleClose()
  }

  useEffect(() => {
    console.log("data ", coinData)
    if (data.length !== 0) {
      setState((prevState: any) => ({
        ...prevState,
        url: data[0].url,
        metadata: data[0].metadata,
        selectedid: data[0].user_inventory.userInventoryId,
        inventory: [...data]
      }))
    }
  
    return () => {
      setState({
        url: '',
        metadata: '',
        selectedid: '',
        userid: '',
        anchorEl: null,
        selectedtype: '',
        inventory: []
      }); // This worked for me
    };
  }, [])

  useEffect(() => {
    if (prevState) {
      if (prevState.selectedtype !== selectedtype) {
        if (selectedtype === '') {
          setState((prevState: any) => ({
            ...prevState,
            url: data[0].url,
            metadata: data[0].metadata,
            selectedid: data[0].user_inventory.userInventoryId,
            inventory: [...data]
          }))
        } else {
          let filtereddata = data.filter((val) => val.inventoryItemTypeId === selectedtype)
          console.log(filtereddata, selectedtype)
          if (filtereddata.length !== 0) {
            setState((prevState: any) => ({
              ...prevState,
              url: filtereddata[0].url,
              metadata: filtereddata[0].metadata,
              selectedid: filtereddata[0].user_inventory.userInventoryId,
              inventory: [...filtereddata]
            }))
          } else {
            setState((prevState: any) => ({
              ...prevState,
              url: '',
              metadata: '',
              selectedid: '',
              inventory: []
            }))
          }
        }
      }
    }
  }, [selectedtype])

  return (
    <Box sx={{ p: 2 }} className={`${classes.root} ${classes.contents}`}>
      {/* <Stack sx={{ p: 2 }} className={`${classes.root} ${classes.contents}`} > */}
      <Stack direction="row" justifyContent="space-between" className={classes.title}>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBackIos /> Back
        </IconButton>
        <Typography className={classes.title}>Inventory</Typography>
      </Stack>
      <Divider />
      {data.length !== 0 ? (
        <Grid container spacing={2} className={`${classes.p10} ${classes.contents}`}>
          <Grid item md={4} mx={2}>
            <Stack className={classes.card}>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <FilterList />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch'
                  }
                }}
              >
                <MenuItem style={{display:"block"}} selected={selectedtype === ''} onClick={(e) => handletypeselect('')}>
                  All
                </MenuItem>
                {type.map((option) => (
                  <MenuItem
                  style={{display:"block"}}
                    key={option.inventoryItemTypeId}
                    selected={option.inventoryItemTypeId === selectedtype}
                    onClick={(e) => handletypeselect(option.inventoryItemTypeId)}
                  >
                    {option.inventoryItemType}
                  </MenuItem>
                ))}
              </Menu>
              {inventory.length !== 0 ? (
                <Stack>
                  {inventory.map((value: any, index: number) => (
                    <Card
                      key={index}
                      style={{marginBottom:"8px",padding:"2px"}}
                      onClick={() => {
                        setState((prevState) => ({
                          ...prevState,
                          url: value.url,
                          metadata: value.metadata,
                          selectedid: value.user_inventory.userInventoryId
                        }))
                      }}
                    >
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        className={`${selectedid === value.user_inventory.userInventoryId ? classes.selecteditem : ''}`}
                      >
                        <img src={value.url} height="100" width="100" alt="" />
                        <Typography>{`Name: ${value.name}`}</Typography>
                        <Typography>{`Type: ${value.inventory_item_type.inventoryItemType}`}</Typography>
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              ) : (
                <Stack sx={{ color: 'black' }}>
                  <Typography>No Data Found</Typography>
                </Stack>
              )}
            </Stack>
            {/* {console.log("in render ", coinData)}
            {
              coinData.map((value: any, index: number) =>
                 <div>{value.name}</div>
              )
            } */}

            <Stack className={classes.card} sx={{marginTop:"15px"}}>
             
              {coinData.length !== 0 ? (
                <Stack >
                  {coinData.map((value: any, index: number) => (
                    <Card
                      key={index}
                      style={{marginBottom:"8px",padding:"2px"}}
                    >
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                      >
                        <img src={value.url} height="100" width="100" alt="" />
                        <Typography>{`${value.name}`}</Typography>
                        <Typography>{`Quantity: ${value.user_inventory.quantity}`}</Typography>
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              ) : (
                <Stack sx={{ color: 'black' }}>
                  <Typography>No Data Found</Typography>
                </Stack>
              )}
            </Stack>
          </Grid>
          <Grid item md={6}>
            {url !== '' && metadata.length !== 0 && (
              <Stack justifyContent="center" alignItems="center">
                <Stack spacing={3} justifyContent="center" alignItems="center">
                  <img src={url} height="200" width="200" alt="" />
                </Stack>
                <Stack spacing={3} justifyContent="center" alignItems="center">
                  <Grid container spacing={3}>
                    {metadata.length !== 0 && (
                      <>
                        {JSON.parse(metadata).map((val, index) => (
                          <Grid item key={index} xs={6} md={6}>
                            <Typography variant="h6" className={classes.title}>{`${val.trait_type}:`}</Typography>
                            <Stack>
                              {val.trait_type !== 'personality' && val.trait_type !== 'age' ? (
                                <LinearProgress variant="determinate" value={parseFloat(val.value)} />
                              ) : (
                                <Typography className={classes.title}>{val.value}</Typography>
                              )}
                            </Stack>
                          </Grid>
                        ))}
                      </>
                    )}
                  </Grid>
                </Stack>
                <Stack justifyContent="center" alignItems="center" spacing={3} direction="row" className={classes.p10}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">User</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userid}
                      label="user"
                      onChange={(e: any) => {
                        setState((prevState) => ({
                          ...prevState,
                          userid: e.target.value
                        }))
                      }}
                    >
                      {user.map((datas, index) => (
                        <MenuItem style={{display:"block", marginRight:"18px"}} key={index} value={datas.id}>
                          {datas.name}
                        </MenuItem>
                      ))}
                      
                    </Select>
                    
                  </FormControl>
                  <Button
                  
                    variant="outlined"
                    disabled={isLoadingtransfer}
                    onClick={() => handleTransfer(userid, selectedid)}
                  >
                    {isLoadingtransfer ? <CircularProgress size={30} /> : 'Transfer'}
                  </Button>
                </Stack>
              </Stack>
            )}
            {url === '' && metadata.length === 0 && (
              <Stack sx={{ color: 'black' }}>
                <Typography>No item selected</Typography>
              </Stack>
            )}
          </Grid>
        </Grid>
      ) : (
        <Stack justifyContent="center" alignItems="center">
          <Typography className={classes.title}>NO ITEMS FOUND</Typography>
        </Stack>
      )}
      {/* </Stack> */}
    </Box>
    
  )
}

export default InventoryContent
