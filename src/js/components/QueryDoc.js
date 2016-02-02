// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Query from 'grommet-index/utils/Query';

export default class QueryDoc extends Component {

  render () {
    let query = Query('(a OR b) AND (n:v OR n:w) "big deal" NOT 01:23:45:67:89:ab 2016-01-31T16:45:46Z');
    let errorQuery = Query('a b "');

    return (
      <DocsArticle title="Query" colorIndex="neutral-3">

        <p>A query descriptor. Query can be used for:</p>

        <ul>
          <li>User typed text containing simple text terms, which
            might be quoted. For
            instance, <strong>name</strong> or <strong>'search term'</strong>.</li>
          <li>User typed text containing faceted filter terms. For
            instance, <strong>name:value</strong>.</li>
          <li>Combined text terms, faceted filters, and boolean logic. The
            boolean logic available
            includes <code>AND</code>, <code>OR</code>, <code>NOT</code>, and
            parentheses for grouping.</li>
        </ul>

        <section>
          <h2>Constructor</h2>
          <dl>
            <dt><code>(string)</code></dt>
            <dd>Initializes a Query with the specified query string.</dd>
          </dl>

          <h2>Methods</h2>
          <dl>
            <dt><code>clone ()</code></dt>
            <dd>Returns a new Query instance identical to this one.</dd>
            <dt><code>error ()</code></dt>
            <dd>Returns a text description of any syntactical errors.</dd>
            <dt><code>set (string)</code></dt>
            <dd>Sets the query string.</dd>
            <dt><code>toString ()</code></dt>
            <dd>Gets the query string.</dd>
            <dt><code>tree ()</code></dt>
            <dd>Returns a boolean logic tree. This permits syntax highlighting
              and programmatic processing. Connecting nodes are of the
              form <code>{"{ op: and|or, left: , right: }"}</code>. Leaf nodes
              are of the form <code>{"{ text: , name:, value: , not: true|false }"}</code></dd>
          </dl>
        </section>

        <h2>Examples</h2>

        <h3>Boolean Logic</h3>
          <pre><code className="javascript">
            {`let query = Query('${query.toString()}');\n`}
            {'query.toString();\n'}
            {'>> ' + query.toString() + "\n"}
            {'query.error();\n'}
            {'>> ' + query.error() + "\n"}
            {'query.tree();\n'}
            {'>> ' + JSON.stringify(query.tree(), null, '  ')}
          </code></pre>

          <h3>Syntax error</h3>
          <pre><code className="javascript">
            {`let errorQuery = Query('${errorQuery.toString()}');\n`}
            {'errorQuery.toString();\n'}
            {'>> ' + errorQuery.toString() + "\n"}
            {'errorQuery.error();\n'}
            {'>> ' + errorQuery.error() + "\n"}
          </code></pre>

      </DocsArticle>
    );
  }
}
