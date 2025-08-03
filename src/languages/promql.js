/*
Language: PromQL
Requires:
Author: Célian GARCIA <celian.garcia1@gmail.com>
Contributors:
Description: Defines the PromQL language for syntax highlighting
Website: https://prometheus.io
*/

import {
  aggregateOpModifierTerms,
  aggregateOpTerms, atModifierTerms, binOpModifierTerms, durationTerms,
  functionIdentifierTerms, numberTerms
// eslint-disable-next-line import/extensions
} from "@prometheus-io/codemirror-promql/dist/cjs/complete/promql.terms";

const terms = aggregateOpTerms
  .concat(functionIdentifierTerms)
  .concat(binOpModifierTerms)
  .concat(atModifierTerms)
  .concat(aggregateOpModifierTerms)
  .concat(numberTerms);

export default function(hljs) {
  const DURATION_MODE = {
    scope: 'number',
    match: new RegExp(`\\d+[${durationTerms.map(t => t.label).join()}]`)
  };
  return {
    name: "PromQL",
    aliases: "promql prom prometheus",
    keywords: terms.map(t => t.label),
    contains: [
      hljs.COMMENT('#', '$'),
      hljs.QUOTE_STRING_MODE,
      DURATION_MODE,
      hljs.NUMBER_MODE
    ]
  };
}
