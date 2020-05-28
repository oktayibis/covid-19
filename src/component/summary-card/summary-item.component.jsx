import React from 'react'
import { Paper, Grid, Typography } from "@material-ui/core";

export const SummaryItem = ({data, title}) => {
    return (
        <div >
            	<Grid item >
					<Paper elevation={4}>
                        <Typography variant={"body1"}>
                           {title}
                        </Typography>
                        <Typography variant={"body2"}>
                            {data}
                        </Typography>
                    </Paper>
				</Grid>
        </div>
    )
}
