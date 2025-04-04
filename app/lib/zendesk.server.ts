/*!
 * Copyright © 2023 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { getEnvOrDie } from './env.server'
import { getBasicAuthHeaders } from './headers.server'
import { throwForStatus } from './utils'

interface ZendeskRequest {
  requester: Requester
  subject: string
  comment: RequestComment
}

interface Requester {
  email: string
  name: string
}

interface RequestComment {
  body: string
}

export async function postZendeskRequest(request: ZendeskRequest) {
  const response = await fetch(
    'https://nasa-gcn.zendesk.com/api/v2/requests.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getBasicAuthHeaders(
          `${getEnvOrDie('ZENDESK_TOKEN_EMAIL')}/token`,
          getEnvOrDie('ZENDESK_TOKEN')
        ),
      },
      body: JSON.stringify({
        request,
      }),
    }
  )

  throwForStatus(response)

  const responseJson = await response.json()
  if (!responseJson.request.id) {
    throw new Error(
      'ZenDesk request succeeded, but did not return a request ID',
      { cause: responseJson }
    )
  }

  return responseJson.request.id
}

export async function closeZendeskTicket(ticketId: number) {
  const response = await fetch(
    `https://nasa-gcn.zendesk.com/api/v2/tickets/${ticketId}.json`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...getBasicAuthHeaders(
          `${getEnvOrDie('ZENDESK_TOKEN_EMAIL')}/token`,
          getEnvOrDie('ZENDESK_TOKEN')
        ),
      },
      body: JSON.stringify({
        ticket: {
          status: 'solved',
        },
      }),
    }
  )

  throwForStatus(response)
}
