import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Paper,
  Box,
  Grid,
  CardHeader,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";

import img1 from "./Assets/avatar-1-Dja0YEDP.png";
import img2 from "./Assets/avatar-2-F9B2bxNX.png";
import img3 from "./Assets/avatar-3-DAakmaVf.png";

const projects = [
  {
    assigned: "John Deo",
    role: "Graphics Designer",
    name: "Materially",
    dueDate: "Jun, 26",
    priority: "Low",
    img: img1,
  },
  {
    assigned: "Jenifer Vintage",
    role: "Web Designer",
    name: "Mashable",
    dueDate: "March, 31",
    priority: "High",
    img: img2,
  },
  {
    assigned: "William Jem",
    role: "Developer",
    name: "Flatable",
    dueDate: "Aug, 02",
    priority: "Medium",
    img: img3,
  },
  {
    assigned: "David Jones",
    role: "Developer",
    name: "Gurubale",
    dueDate: "Sep, 22",
    priority: "High",
    img: img1, // Using img1 as a placeholder
  },
];

   
  
const ProjectsTable = () => {
    const getChipStyles = (priority) => {
        switch (priority) {
          case "High":
            return { backgroundColor: "rgba(239, 154, 154, 0.6)", color: "rgb(198, 40, 40)" };
          case "Low":
            return { backgroundColor: "rgb(255, 248, 225)", color: "rgb(255, 193, 7)" };
          case "Medium":
            return { backgroundColor: "rgb(227, 242, 253)", color: "rgb(33, 150, 243)" };
          default:
            return { backgroundColor: "gray", color: "white" };
        }
      };
  return (
    <Grid>
        <Paper>
            <CardHeader title="Projects"   titleTypographyProps={{fontSize:"18px",fontWeight:"500"}}>
      </CardHeader>
      <Divider/>
      <CardContent sx={{padding:"0px"}}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Assigned</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt={project.assigned}
                      src={project.img}
                      sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="body1" fontSize={'14px'}>{project.assigned}</Typography>
                      <Typography variant="subtitle2" color="textSecondary" fontSize={'12px'}>
                        {project.role}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.dueDate}</TableCell>
                <TableCell>
                    <Chip
                    label={project.priority}
                    sx={{
                      ...getChipStyles(project.priority),
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </CardContent>
      <Box sx={{ textAlign: "right",p:"24px"}}>
          <Typography
            variant="body2"
            color="rgb(33, 150, 243)"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View All Projects
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProjectsTable;
