# Gamification Concept: PKN Quiz Games for High School

## Overview
PKN Quiz Games is a competitive and collaborative learning platform targeting high school students. The platform leverages gamification to make Civics Education (PKN) engaging, with features for user management, progress tracking, daily challenges, and tournaments. Supabase is used for authentication, progress saving, and global leaderboards.

---

## Core Features

### 1. **User Accounts & Progress**
- **Authentication:** Students sign up/sign in using email or social logins via Supabase Auth.
- **Profile:** Each student has a profile showing progress, badges, achievements, and rank.
- **Progress Saving:** Quiz history, scores, categories mastered, and challenge completions are saved to Supabase DB.

### 2. **Question Bank & Categories**
- **Question Bank:** Over 50 questions, regularly expanded.
- **Categories (8):**
  1. Pancasila
  2. Konstitusi
  3. Demokrasi
  4. HAM (Hak Asasi Manusia)
  5. Lembaga Negara
  6. NKRI (Negara Kesatuan Republik Indonesia)
  7. Bhinneka Tunggal Ika
  8. Wawasan Nusantara
- **Question Types:** Multiple choice, true/false, matching, scenario-based.

### 3. **Gamification Elements**
- **Points & XP:** Earned for correct answers, streaks, challenge completion, tournament placement.
- **Badges:** Awarded for milestones (e.g., "Constitution Master", "Streak Hero").
- **Levels:** Progress through levels as XP accumulates.
- **Leaderboards:** Global, school-specific, and category-specific rankings powered by Supabase Realtime.
- **Achievements:** Special awards for rare feats (e.g., 100% in all categories, tournament wins).

### 4. **Daily Challenges**
- **Challenge Types:** Timed quizzes, category focus, streak maintenance.
- **Rewards:** Bonus XP, unique badges, leaderboard boosts.
- **Notifications:** Reminders to participate (via email/push).

### 5. **Tournaments**
- **Format:** Scheduled weekly/monthly; can be solo or team-based (class vs. class, school vs. school).
- **Bracket System:** Progress through rounds by answering more questions correctly/faster than opponents.
- **Live Leaderboards:** Update in real-time during tournaments.
- **Prizes:** Special badges, XP, and recognition on main leaderboard.

### 6. **Social & Collaborative Features**
- **Friend Lists:** Add classmates, compare progress.
- **Teams:** Form teams for tournaments.
- **Discussion:** In-app chat/forums for question explanations and collaboration.

---

## Supabase Integration

### 1. **Authentication**
- Supabase Auth for sign-up, login, password reset.
- Social OAuth (Google, GitHub, etc.).

### 2. **Database**
- Questions, user profiles, progress, badges, and leaderboard scores stored in Supabase tables.
- Questions can be added/edited by admins via dashboard.

### 3. **Realtime Leaderboards**
- Supabase Realtime used for instant leaderboard updates.
- Score submissions trigger updates across all clients.

### 4. **Storage**
- User avatars, badges, tournament assets stored via Supabase Storage.

---

## Milestone Roadmap

1. **Phase 1: MVP**
   - Authentication, quiz engine, question bank (50+ q's, 8 categories), basic progress tracking.
2. **Phase 2: Gamification**
   - Points, XP, badges, levels, leaderboards.
3. **Phase 3: Social & Challenges**
   - Daily challenges, friend lists, basic tournaments.
4. **Phase 4: Expansion**
   - More questions/categories, team tournaments, school/class leaderboards, in-app chat.

---

## Sample Question (per Category)
- **Pancasila:** What is the meaning of the second principle of Pancasila?
- **Konstitusi:** Which year was the Indonesian Constitution last amended?
- **Demokrasi:** What is a characteristic of participatory democracy?
- **HAM:** Which right is guaranteed by Article 28 of the Indonesian Constitution?
- **Lembaga Negara:** What is the role of the DPR?
- **NKRI:** What does NKRI stand for?
- **Bhinneka Tunggal Ika:** Translate "Bhinneka Tunggal Ika" and explain its significance.
- **Wawasan Nusantara:** What is the concept of "Wawasan Nusantara" in national unity?

---

## UX/UI Suggestions
- **Mobile-first design:** Fast, intuitive navigation.
- **Animated feedback:** Celebrate correct answers, unlocked achievements.
- **Leaderboard screens:** School/class filter, global rankings.
- **Challenge/tournament banner:** Highlight current/next events.

---

## Expansion Opportunities
- Add teacher dashboard for monitoring class progress.
- Add video explanations for tough questions.
- Implement push notifications and reminders.
- Expand to other subjects (History, Geography, etc.).

---

## Summary
This concept blends Civics Education with modern gamification, social competition, and robust backend infrastructure via Supabase. The result is a fun, engaging, and scalable learning platform for Indonesian high school students.