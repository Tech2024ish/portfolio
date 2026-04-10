-- Run these in your Supabase SQL Editor

-- Projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT[] NOT NULL DEFAULT '{}',
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Skills table
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 100)
);

-- Contacts table
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Sample projects data
INSERT INTO projects (title, description, tech_stack, github_url, live_url) VALUES
  ('REST API Service', 'A high-performance REST API built with FastAPI and Supabase for managing user data and authentication.', ARRAY['Python', 'FastAPI', 'Supabase', 'Docker'], 'https://github.com', 'https://example.com'),
  ('Task Management API', 'Backend service for a task management app with real-time updates, user roles, and full CRUD operations.', ARRAY['FastAPI', 'PostgreSQL', 'Redis', 'Pydantic'], 'https://github.com', NULL),
  ('Auth Microservice', 'Secure authentication microservice with JWT tokens, refresh tokens, and OAuth2 support.', ARRAY['Python', 'FastAPI', 'Supabase', 'JWT'], 'https://github.com', 'https://example.com');

-- Sample skills data
INSERT INTO skills (name, category, level) VALUES
  ('Python', 'Language', 90),
  ('FastAPI', 'Framework', 88),
  ('Supabase', 'Database', 82),
  ('PostgreSQL', 'Database', 78),
  ('Docker', 'DevOps', 72),
  ('REST APIs', 'Architecture', 92),
  ('Git', 'Tools', 85),
  ('Linux', 'Tools', 76);
