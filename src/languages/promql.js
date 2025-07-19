/*
Language: PromQL
Requires:
Author: Célian GARCIA <celian.garcia1@gmail.com>
Contributors:
Description: Defines the PromQL language for syntax highlighting
Website: https://prometheus.io
*/

export default function(hljs) {
  const DURATION_MODE = {
    scope: 'number',
    begin: hljs.NUMBER_RE,
    end: /[smhdwy]/
  };
  return {
    name: "PromQL",
    aliases: "promql prom prometheus",
    keywords: [
      'sum',
      'rate',
      'by',
      'min',
      'max',
      'avg',
      'group',
      'stddev',
      'stdvar',
      'count',
      'count_values',
      'bottomk',
      'topk',
      'quantile',
      'limitk',
      'limit_ratio'
    ],
    contains: [
      hljs.COMMENT('#', '$'),
      hljs.QUOTE_STRING_MODE,
      DURATION_MODE
    ]
  };
}
