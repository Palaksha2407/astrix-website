import React from 'react';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <div className="event-details">
      <h2>Explore Your First Event</h2>
      <div className="event-info">
        <h3>Event Name</h3>
        <p><strong>Venue</strong> | 04/3/2024 @19:00</p>
        <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</p>
        <h4>Artist Lineup</h4>
        <div className="artist-lineup">
          <img className='artistLeft' src="https://s3-alpha-sig.figma.com/img/6aa2/8717/802c592e7915f9458ed0eccbd85f560b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KggSow7Ng9bDGTLU~hXr~d69PDJ-aJdfMyEEsuyHso0Qh5I42jemf6nr-s4Suw~r0Z3qF7Eq2u83LpsWYlDoXixbuH9sMssjN2kz5HFJmC1Sg6KJZ5Q2gI81eB7FAL9DrExUWGdqCXmBMOCpiw6~Xp67X5ZPnzsFfDBDu3MJ4Whdti~kd-vHUdf6gMJiLRekpNBEo7eWCp6kNOXlYK17IOBp5o23AUq9Jq1jvH1qtGNkDcdIJTWa4iXUY~GOUtISD2LRSLfen5KoMDpghc4qDxIy-Osv6GVjNdLCR75~gXQp1wnwUkDiHdjybQIFAjrv6QvBGYpMoiyIcn1wJXs8ww__" alt="Artist 1" />
          <img className='artistMid' src="https://s3-alpha-sig.figma.com/img/83e4/cf13/2a9680acaa7b9a4e257fe0c4a8a68d4f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LCvR~EIAEgPeYPHr3~hwQ5gTCqFX3PDyyVJWFg~2h~adoNkBWkNlpTwN1Bn-6bd4R0YBDjlH5hRP2HsCmlTTB8zi9o7DQOlMSqUNgOi4TgpDC9iaiREPFkekMbzPK4s5RrnnUNlBcwJzC2Fej0yDx-0R5jBNttjBdh3Jy5AmCjJvboWh6FHNaX83ooXXGqBk-nPGQhd8cSCsZhU86IEVD8if8lkWcg-IB-IIm95dWwoX7gS6c8H8kNV3GLE7wBTC9Rt940h929bR5SbmYsvHTfORTU0hXNZHrhxmPbk2nm26e~SMQiSTYAoySO3irEbwPxTOf0cyaBkiMQECDN4R2g__" alt="Artist 2" />
          <img className='artistRight' src="https://s3-alpha-sig.figma.com/img/dc5a/7843/593d34d04c8695561a6bc810b4c012c4?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RL7iKUype2igJ~9YA~R2EOPqFGbtdxYTV5-02NUyO-b3LxvZluQiE2oZC8Y3M--HX2cXQ59IiXOJ5t4iGUxciNF7fIJhUX8sz3VtvjqIJXYsKF31XNhNaFOnnK9-yFL88UWgTKNa7pzw8lY-QY8tl4H9e7C362RA1bEboPe6M0vI8VBb~87IzS71~rhZyAcMdGd~Y4Rnxstr37jZ9zMwndGDQOPzXX4Hw-mhjdTrqLCbfGVEx7WIKpDySJZjlJTwPo8BnYY63LmsOmzjGktNKllgPL5C4hu8YYfWuXl0E6y1np2Bdr9PCTGRUzzZEvB50JNnZGEwGynSHi-03~5iLQ__" alt="Artist 3" />
        </div>
        <div className="join-waitlist">
          <img className='artistQr' src="https://s3-alpha-sig.figma.com/img/10c8/57c1/6626f7571ba3a9e6a8b8ba8dcc94a192?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDgRBx0yljJDqTl5e9FWhAowS0pCLhBu5CFzVpmMOixj0s4HI7P6tNDUoYH2PPfz90oxjkbVbDJ8AbOSX9S0yUaYsM85QaLNUpaS~c5BhgdoieNxUP7OYAzhtrXH9sIRwwysSIe3IRiyrN5MbnK-FqsJcK1TfS08toRn3YII-O8u2uSbX9FD8MRevHG9scMsHZcn9PyqyC7RTnkc2iaPm453hCzVZ8hYr9MgBEteVj~F1lrjbcSyplbtkp1VIpG5bK0RwrTIyOEiHeXSxydvxtk7pfsyAYdL-AHtX~z8m-XEhA3pfoFNrUCJVA4Wpoa1nejbus6Yau0w5CW2MMFA5g__" alt="QR Code" />
          <button>Join Waitlist</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
