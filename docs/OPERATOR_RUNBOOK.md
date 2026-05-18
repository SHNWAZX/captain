# Operator Runbook

Use this runbook when preparing, deploying, or debugging captain.

## Startup checks

- Confirm required environment variables are present.
- Verify the build command finishes without warnings that block deployment.
- Start the app locally and open the primary route.

## Troubleshooting

- Check recent deployment logs first.
- Reproduce with the same environment variables when possible.
- Keep rollback steps simple and documented in the release notes.
