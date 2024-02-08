// Popup page of the extension. It is displayed when the user clicks on the extension icon.

import React, { useState, useEffect } from 'react';
import psl from 'psl';
import { Stack, Button, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import trackedDomainsList from '../../assets/json/trackedDomains.json'; // List of domains to track.
import logo from '../../assets/img/logo.png';
import './Popup.css';
import { FAQ_URL, GOOGLE_SIGNIN_URL } from '../../constants';

const Popup = () => {
  const [userEmail, setUserEmail] = useState(null); // User's Google account email. Will be fetched via the Chrome.identity API.
  const [userId, setUserId] = useState(null); // User's Google account ID. Will be fetched via the Chrome.identity API.
  const [currentDomain, setCurrentDomain] = useState(null); // Current domain the user is on. Will be fetched via the Chrome.tabs API.

  const websiteIsTrackedByLitestack = trackedDomainsList.includes(currentDomain);

  // Open the FAQ page when the user clicks on the "What's this?" button.
  const handleWhatsThisButtonClick = () => {
    chrome.tabs.create({
      url: FAQ_URL,
    });
  };

  // Open the Google account sign-in page when the user clicks on the "Sign in" button.
  const handleSignInButtonClick = () => {
    chrome.tabs.create({
      url: GOOGLE_SIGNIN_URL,
    });
  };

  // Get the current domain and the user's account details when the popup is opened.
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = new URL(tabs?.[0]?.url);
      const domain = psl.parse(url?.hostname)?.domain;
      setCurrentDomain(domain);
    });

    chrome.identity.getProfileUserInfo(null, (userInfo) => {
      setUserEmail(userInfo.email);
      setUserId(userInfo.id);
    });
  }, []);

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        padding: '15px',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 'calc(10px + 2vmin)',
        backgroundColor: '#282c34',
        color: 'white',
      }}
    >
      <Button
        sx={{ alignSelf: 'flex-start' }}
        size="small"
        onClick={handleWhatsThisButtonClick}
      >
        What is this?
      </Button>
      <Box sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
        <img src={logo} className="App-logo" alt="Litestack logo" />
        {userEmail && userId ? (
          <Box>
            <Typography sx={{ mt: 1 }}>
              {currentDomain ? (
                <span>
                  You are on <b>{currentDomain}</b>.
                </span>
              ) : (
                'You are on an unknown website.'
              )}
            </Typography>
            {websiteIsTrackedByLitestack ? (
              <Stack
                sx={{ mt: 2 }}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <CheckCircleIcon sx={{ color: 'white' }} />
                <Typography>
                  This website <b>IS</b> tracked by Litestack.
                </Typography>
              </Stack>
            ) : (
              <Stack
                sx={{ mt: 2 }}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <CancelIcon sx={{ color: 'white' }} />
                <Typography>
                  This website <b>IS NOT</b> tracked by Litestack.
                </Typography>
              </Stack>
            )}
          </Box>
        ) : (
          <Box>
            <Typography sx={{ my: 2 }}>
              Enable the Chrome synchronization with your organization's Google
              account to activate Litestack.
            </Typography>
            <Button variant="contained" onClick={handleSignInButtonClick}>
              Sign in
            </Button>
          </Box>
        )}
      </Box>
      {userEmail && userId && (
        <Typography sx={{ marginTop: 'auto' }} variant="caption">
          Signed in as <b>{userEmail}</b>
        </Typography>
      )}
    </Box>
  );
};

export default Popup;
