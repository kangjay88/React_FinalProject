import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function PersonalInfo({ formData, setFormData }) {
    return (
        <div className="personal-info-container">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Gender" variant="outlined"
                    type="text"
                    required
                    placeholder="Male or Female?"
                    value={formData.gender}
                    onChange={(e) => {
                        setFormData({ ...formData, gender: e.target.value });
                    }}
                />
                <TextField id="outlined-basic" label="Age" variant="outlined"
                    type="number"
                    placeholder="Your Age in years"
                    value={formData.age}
                    onChange={(e) => {
                        setFormData({ ...formData, age: e.target.value });
                    }}
                />
                <h1> How Tall are you? </h1>
                <TextField id="outlined-basic" label="Height" variant="outlined"
                    type="number"
                    placeholder="Your Height (in Inches)"
                    value={formData.height}
                    onChange={(e) => {
                        setFormData({ ...formData, height: e.target.value });
                    }}
                />
                <h1> How much do you currently weigh? </h1>
                <TextField id="outlined-basic" label="Weight" variant="outlined"
                    type="number"
                    placeholder="Current weight (in lbs)"
                    value={formData.weight}
                    onChange={(e) => {
                        setFormData({ ...formData, weight: e.target.value });
                    }}
                />
            </Box>
        </div>
    );
}

export default PersonalInfo;