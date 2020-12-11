import React, { useState, useEffect, memo } from 'react';
import { withTheme } from 'styled-components';
import Immutable from 'immutable';
import {
  EditorState, Editor, RichUtils, Modifier, DefaultDraftBlockRenderMap
} from 'draft-js';
import { useFormContext, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import BlockStyleControls from '../Editor/BlockStyleControls';
import InlineStyleControls from '../Editor/InlineStyleControls';

export const FormEditor = ({
  theme, name, validate, ...rest
}) => {
  const {
    errors, control, watch, setValue
  } = useFormContext();
  const error = errors[name];

  const blockRenderMap = Immutable.Map({
    paragraph: {
      element: 'p'
    },
    unstyled: {
      element: 'p'
    }
  });

  // Include 'paragraph' as a valid block and updated the unstyled element but
  // keep support for other draft default block types
  const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

  const editorState = watch(name);

  const handleChangeEditorState = (newEditorState) => setValue(name, newEditorState);

  const toggleBlockType = (blockType) => {
    handleChangeEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineType = (blockType) => {
    handleChangeEditorState(RichUtils.toggleInlineStyle(editorState, blockType));
  };

  function handlePastedText(text, html, currentEditorState) {
    const content = currentEditorState.getCurrentContent();
    const selection = currentEditorState.getSelection();

    const newContent = Modifier.insertText(content, selection, text);

    const newState = EditorState.push(currentEditorState, newContent, 'insert-characters');
    handleChangeEditorState(newState);
    return 'handled';
  }

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleChangeEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          border: `1px solid ${theme.color.border}`,
          borderRadius: theme.borderRadius.default,
          borderBottom: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }}
      >
        <BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
        <InlineStyleControls editorState={editorState} onToggle={toggleInlineType} />
      </div>
      <Controller
        name={name}
        as={Editor}
        valueName="editorState"
        control={control}
        onChange={([value]) => value}
        rules={{ validate }}
        handleKeyCommand={handleKeyCommand}
        handlePastedText={handlePastedText}
        blockRenderMap={extendedBlockRenderMap}
        {...rest}
      />
    </>
  );
};

FormEditor.propTypes = {};

FormEditor.defaultProps = {};

export default memo(withTheme(FormEditor));
