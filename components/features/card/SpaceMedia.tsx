import React from 'react'
import styles from './SpaceMedia.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SpaceCard } from '../../models/SpaceCard';

interface Props {
    spaceCard: SpaceCard
}
const SpaceMedia = ({ spaceCard }: Props) => {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={spaceCard.url}
                    alt={spaceCard.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {spaceCard.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {spaceCard.explanation}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default SpaceMedia;
