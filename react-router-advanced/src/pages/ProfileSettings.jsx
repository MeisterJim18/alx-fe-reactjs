const ProfileSettings = () => {
  return (
    <div className="profile-section">
      <h2>Paramètres du Compte</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>Notifications :</label>
          <input type="checkbox" defaultChecked />
        </div>
        <div className="form-group">
          <label>Thème :</label>
          <select>
            <option>Clair</option>
            <option>Sombre</option>
          </select>
        </div>
        <button className="save-btn">Sauvegarder</button>
      </div>
    </div>
  )
}

export default ProfileSettings