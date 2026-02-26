# Publishing SearXNG Skill to SkillHub

## ✅ Pre-Publication Verification

All files present:
- [x] SKILL.md (v1.0.1)
- [x] README.md
- [x] LICENSE (MIT)
- [x] CHANGELOG.md
- [x] scripts/searxng.py
- [x] .skillhub/metadata.json

Security:
- [x] No hardcoded private URLs
- [x] Generic default (http://localhost:8080)
- [x] Fully configurable via SEARXNG_URL

Author:
- [x] Updated to: Avinash Venkatswamy

## 📤 Publishing Steps

### Step 1: Login to SkillHub

```bash
skillhub login
```

This will open your browser. Complete the authentication flow.

### Step 2: Verify Authentication

```bash
skillhub whoami
```

Should return your user info if logged in successfully.

### Step 3: Publish the Skill

From the workspace root:

```bash
cd ~/skills
skillhub publish skills/searxng
```

Or from the skill directory:

```bash
cd ~/skills/skills/searxng
skillhub publish .
```

### Step 4: Verify Publication

After publishing, you can:

**Search for your skill:**
```bash
skillhub search searxng
```

**View on SkillHub:**
Visit https://skillhub.com/skills/searxng

## 📋 What Gets Published

The CLI will upload:
- SKILL.md
- README.md
- LICENSE
- CHANGELOG.md
- scripts/ directory
- .skillhub/metadata.json

It will NOT upload:
- PUBLISH.md (this file)
- PUBLISHING_CHECKLIST.md
- Any .git files
- Any node_modules or temporary files

## 🔧 If Publishing Fails

### Common Issues

1. **Not logged in:**
   ```bash
   skillhub login
   ```

2. **Invalid skill structure:**
   - Verify SKILL.md has all required fields
   - Check .skillhub/metadata.json is valid JSON

3. **Duplicate slug:**
   - If "searxng" is taken, you'll need a different name
   - Update `name` in SKILL.md and metadata.json

4. **Network issues:**
   - Check your internet connection
   - Try again: `skillhub publish skills/searxng`

### Get Help

```bash
skillhub publish --help
```

## 📊 After Publishing

### Update Notifications

If you make changes later:

1. Update version in SKILL.md and metadata.json
2. Add entry to CHANGELOG.md
3. Run: `skillhub publish skills/searxng`

### Manage Your Skill

**Delete (soft-delete):**
```bash
skillhub delete searxng
```

**Undelete:**
```bash
skillhub undelete searxng
```

## 🎉 Success!

Once published, users can install with:

```bash
skillhub install searxng
```

Your skill will appear:
- On SkillHub website: https://skillhub.com
- In search results: `skillhub search privacy`
- In explore: `skillhub explore`

---

**Ready to publish?** Run `skillhub login` and then `skillhub publish skills/searxng`!
