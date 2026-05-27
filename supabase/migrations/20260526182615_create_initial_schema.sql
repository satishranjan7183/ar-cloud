/*
  # Initial Schema for AR CLOUD IT Trainings

  1. New Tables
    - `demo_bookings`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `course` (text)
      - `preferred_date` (date)
      - `preferred_time` (text)
      - `created_at` (timestamp)
    
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
    
    - `student_reviews`
      - `id` (uuid, primary key)
      - `name` (text)
      - `course` (text)
      - `rating` (integer)
      - `review` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Create policies for inserting demo bookings, contact inquiries, and reviews
    - Allow select on student reviews (public display)
*/

CREATE TABLE IF NOT EXISTS demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  course text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS student_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  course text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can book a demo"
  ON demo_bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit contact inquiry"
  ON contact_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit a review"
  ON student_reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view reviews"
  ON student_reviews FOR SELECT
  TO anon, authenticated
  USING (true);
