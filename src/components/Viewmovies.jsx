import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Viewmovies =() =>{
    const rows=[{mName:'Movie1',mdesc:'hkjkj',mdirector:'hgejf' },
         {mName:'Gouri',mdesc:'fgfg',mdirector:'gdfdgf' },
         {mName:'Pranav',mdesc:'gfggt',mdirector:'fgdf' }]

  return (
    <div>
        
        {rows.map(() => (
        
    <Card>
     <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         yigkfjwk
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
 ))}
  </div>
  )
}  
 export default Viewmovies 

