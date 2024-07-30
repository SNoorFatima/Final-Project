import React from 'react';
import { Paper, CardHeader, Grid, List, ListItem, ListItemText, Typography, ButtonBase, Divider } from '@mui/material';
import { green, red } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const TotalRevenue = () => {
  const data = [
    { name: "Bitcoin", change: "+$145.85", positive: true },
    { name: "Ethereum", change: "-$6.368", positive: false },
    { name: "Ripple", change: "+$458.63", positive: true },
    { name: "Neo", change: "-$5.631", positive: false },
    { name: "Ethereum", change: "-$6.368", positive: false },
    { name: "Ripple", change: "+$458.63", positive: true },
    { name: "Neo", change: "-$5.631", positive: false },
    { name: "Ethereum", change: "-$6.368", positive: false },
    { name: "Ripple", change: "+$458.63", positive: true },
    { name: "Neo", change: "-$5.631", positive: false },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <CardHeader title="Total Revenue" />
          <div style={{ maxHeight: 400, overflow: 'auto' }}>
            <List>
              {data.map((item, index) => (
                <ButtonBase key={index} style={{ width: '100%' }}>
                  <ListItem>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{ variant: 'body1' }}
                    />
                    <Typography
                      variant="body2"
                      style={{
                        color: item.positive ? green[500] : red[500],
                        marginRight: 10,
                      }}
                    >
                      {item.positive ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
                      {item.change}
                    </Typography>
                  </ListItem>
                </ButtonBase>
               
              ))
             }
            </List>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TotalRevenue;
