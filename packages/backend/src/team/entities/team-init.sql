CREATE TABLE IF NOT EXISTS teams
(
    team_uuid        VARCHAR(36)  NOT NULL DEFAULT uuid(),
    team_name        VARCHAR(255) NOT NULL UNIQUE,
    team_description VARCHAR(255) NOT NULL,
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (team_uuid)
);

CREATE TABLE IF NOT EXISTS teams_user
(
    teams_user_uuid VARCHAR(36) NOT NULL DEFAULT uuid(),
    team_uuid       VARCHAR(36) NOT NULL,
    user_uuid       VARCHAR(36) NOT NULL,
    PRIMARY KEY (team_uuid, user_uuid),
    FOREIGN KEY (team_uuid) REFERENCES teams (team_uuid) ON DELETE CASCADE,
    FOREIGN KEY (user_uuid) REFERENCES users (user_uuid) ON DELETE CASCADE
);