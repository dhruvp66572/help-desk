import React, { useState } from 'react';

const Profile = () => {
  // Dummy user data
  const [user, setUser] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    department: 'Support',
    contactNumber: '+1234567890',
    image: 'https://i.pravatar.cc/150?img=3'
  });

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleProfileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setUser(form);
    setEditMode(false);
    // Here you would update the profile in the backend
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send feedback/rating to backend
    
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: '2rem auto',
      padding: 32,
      border: '1px solid #ddd',
      borderRadius: 12,
      background: '#fafafa',
      display: 'flex',
      gap: 32,
      boxShadow: '0 2px 8px #eee'
    }}>
      {/* Profile Section */}
      <div style={{ flex: 1, minWidth: 250 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img src={user.image} alt="Profile" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }} />
        </div>
        {editMode ? (
          <form onSubmit={handleProfileSubmit}>
            <div style={{ marginBottom: 12 }}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleProfileChange}
                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleProfileChange}
                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={form.department}
                onChange={handleProfileChange}
                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Contact Number:</label>
              <input
                type="text"
                name="contactNumber"
                value={form.contactNumber}
                onChange={handleProfileChange}
                style={{ width: '100%', padding: 6, borderRadius: 4, border: '1px solid #ccc' }}
                required
              />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button type="submit" style={{ flex: 1, padding: '8px 0', borderRadius: 4, border: 'none', background: '#007bff', color: '#fff' }}>
                Save
              </button>
              <button type="button" onClick={() => setEditMode(false)} style={{ flex: 1, padding: '8px 0', borderRadius: 4, border: '1px solid #ccc', background: '#fff' }}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 style={{ marginBottom: 8 }}>{user.username}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Department:</strong> {user.department}</p>
            <p><strong>Contact Number:</strong> {user.contactNumber}</p>
            <button onClick={() => { setEditMode(true); setForm(user); }} style={{ marginTop: 16, padding: '8px 16px', borderRadius: 4, border: 'none', background: '#007bff', color: '#fff' }}>
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Feedback Section */}
      <div style={{ flex: 1, minWidth: 250 }}>
        <h3>Give Feedback</h3>
        {submitted ? (
          <div style={{ color: 'green', marginTop: 12 }}>Thank you for your feedback!</div>
        ) : (
          <form onSubmit={handleFeedbackSubmit}>
            <div style={{ marginBottom: 12 }}>
              <label>Rating: </label>
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  style={{
                    cursor: 'pointer',
                    color: rating >= star ? '#ffc107' : '#ccc',
                    fontSize: 24
                  }}
                  onClick={() => setRating(star)}
                  role="button"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >★</span>
              ))}
            </div>
            <div style={{ marginBottom: 12 }}>
              <textarea
                rows={3}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                placeholder="Write your feedback..."
                value={feedback}
                onChange={e => setFeedback(e.target.value)}                
              />
            </div>
            <button type="submit" style={{ padding: '8px 16px', borderRadius: 4, border: 'none', background: '#007bff', color: '#fff' }}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;