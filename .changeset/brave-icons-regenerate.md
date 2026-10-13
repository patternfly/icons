---
'@patternfly/icons': major
---

Regenerates the `patternfly` icon set from PatternFly v6 sources and renames
icon modules to kebab-case for parity with `@patternfly/react-icons`.

**New icons** (from PatternFly v6): `multicluster`, `treeview`,
`severity-critical`, `severity-important`, `severity-minor`,
`severity-moderate`, `severity-none`, `severity-undefined`, and
`pen-to-square`.

**Renamed modules** in the `patternfly` set: `ansibeTower` to `ansibe-tower`,
`chartSpike` to `chart-spike`, `cloudCircle` to `cloud-circle`,
`cloudServer` to `cloud-server`, `paperPlaneAlt` to `paper-plane-alt`, and
`svgPathDataMissing` to `path-missing`. Import these modules by their new
kebab-case names.

The `fas`, `far`, and `fab` sets are unchanged.
