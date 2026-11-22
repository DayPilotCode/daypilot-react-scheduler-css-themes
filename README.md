# How to Use CSS Themes with the React Scheduler Component

This is the code repository for the [How to Use CSS Themes with the React Scheduler Component](https://code.daypilot.org/75128/how-to-use-css-themes-with-the-react-scheduler-component) tutorial by [DayPilot](https://www.daypilot.org/).

## Description
- Includes [DayPilot Lite for JavaScript](https://javascript.daypilot.org/open-source/) - open-source calendar/scheduling components for JavaScript/Angular/React/Vue (Apache License 2.0).
- This project was generated using the [DayPilot UI Builder](https://builder.daypilot.org/), an online tool for configuring DayPilot components and generating starter projects.

## AI assistants

Connect to official DayPilot tools using the Streamable HTTP MCP endpoint
<https://mcp.daypilot.org/mcp>. See [setup and HTTP alternatives](https://mcp.daypilot.org/)
and [machine-readable discovery](https://mcp.daypilot.org/llms.txt).
Follow this project's [AGENTS.md](AGENTS.md) for its exact typings path and edition constraints.

- References: use `search` and `fetch` to find and read official documentation,
  API members and examples; preserve edition qualifications and source URLs.
- Packages: use `resolve_package` to look up current official releases when an
  installation or upgrade is requested. Pro installation guidance supplies a
  trial; preserve any existing licensed dependency.
- Themes: use `theme_manifest`, then `render_theme` with its revision and a
  unique prefix. Load the returned CSS globally and set the component's `theme`
  to that prefix; check compatibility with the installed component.
- New projects: use `builder_catalog`, `validate_project`, then `generate_project`
  only when deliberately creating a new application. Follow the linked MCP
  contract for the validated specification, download and verification; extract
  into a new directory. Validation does not install, build or run the app.

Before applying current documentation, inspect the installed edition, version,
and TypeScript definitions (package metadata/lockfiles or the bundled runtime).
Current documentation does not establish support in older installed versions.
Preserve this application's framework setup, edition, dependencies and lockfiles
unless a dependency change is requested. A current-release lookup does not
itself authorize an upgrade. Builder creates a fresh project; it does not patch
or merge this application.

## License
- The code of this tutorial is licensed under Apache License 2.0.
- This tutorial may include third-party libraries available under their respective licenses.

## Project commands

- Install: `npm ci`.
- Development: `npm run dev`.
- Build: `npm run build`.
- Lint: `npm run lint`.
- Test: this starter does not provide an executable test suite (no `test` script).

## CSS themes

Select a theme above the Scheduler. The four custom stylesheets are imported globally in `src/index.css`; the default theme is built in. The same stylesheet increases default-theme row-header left padding to 20px. Events created by selecting a time range stay in memory when switching themes. Reloading resets the sample.
